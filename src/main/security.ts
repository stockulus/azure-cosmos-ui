import { safeStorage } from 'electron'

export function encryptString(string: string) {
  return Buffer.from(safeStorage.encryptString(string)).toString('base64')
}

export function decryptString(string: string) {
  return safeStorage.decryptString(Buffer.from(string, 'base64'))
}
