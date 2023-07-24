import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      encryptString: (string: string) => Promise<string>
      decryptString: (string: string) => Promise<string>
    }
  }
}
