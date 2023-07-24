import { CosmosClient } from '@azure/cosmos'

import { decryptString } from './security'

const regex = /(?:AccountEndpoint=https:\/\/)([^:/\s]+)\.documents\.azure\.com/

export async function getDBInfo(connectionString: string) {
  const decryptedConnectionString = decryptString(connectionString)
  const matchResult = decryptedConnectionString.match(regex)
  const databaseName =
    matchResult && matchResult.length >= 2 ? matchResult[1] : 'unknown DB'

  const client = new CosmosClient(decryptedConnectionString)
  const databases = await client.databases.readAll().fetchAll()

  const result = await Promise.all(
    databases.resources.map(async (d) => {
      const database = client.database(d.id)
      const containers = await database.containers.readAll().fetchAll()

      return {
        id: d.id,
        containers: containers.resources.map((c) => ({
          id: c.id,
          partitionKey: c.partitionKey
        }))
      }
    })
  )

  return {
    id: databaseName,
    databases: result
  }
}
