import { ElectronAPI } from '@electron-toolkit/preload'

export type DbInfo = {
  id: string
  databases: {
    id: string
    containers: {
      id: string
      partitionKey: {
        paths: string[]
        kind: string
      }
    }[]
  }[]
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      encryptString: (string: string) => Promise<string>
      getDbInfo: (string: string) => Promise<DbInfo>
    }
  }
}
