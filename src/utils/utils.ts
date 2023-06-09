import CryptoJS from 'crypto-js'

import { Upgradable, UpgradableStats } from "../classes/upgradable"

export function currencyFormat(amount: number): string {
  const formatter = new Intl.NumberFormat('us-US', {
    style: 'currency',
    currency: 'USD',
    compactDisplay: 'short',
    currencyDisplay: 'narrowSymbol'
  })

  return formatter.format(amount)
}

export type SaveData = {
  money: number
  upgradables: Upgradable[]
}

export type LoadData = {
  money: number, upgradables: UpgradableStats[]
} | undefined

const NOT_SECRET = 'not-secret-at-all'
const STORAGE_NAME = 'button-inc:v1'

export function saveGame(gameData: SaveData): void {
  const data: LoadData = {
    money: gameData.money,
    upgradables: gameData.upgradables.map(u => convertToUpgradableStats(u))
  }

  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), NOT_SECRET).toString()
  localStorage.setItem(STORAGE_NAME, encrypted)
}

export function loadSave(): LoadData | undefined {
  return localStorage.getItem(STORAGE_NAME) && JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem(STORAGE_NAME)!, NOT_SECRET).toString(CryptoJS.enc.Utf8))
}

function convertToUpgradableStats(upgradable: Upgradable): UpgradableStats {
  return {
    name: upgradable.name,
    lore: upgradable.lore,
    basePrice: upgradable.price,
    baseProduction: upgradable.production,
    baseUpgradeCost: upgradable.upgradeCost,
    startingQuantity: upgradable.quantity,
    levelModifier: upgradable.levelModifier,
    startingLevel: upgradable.level,
    priceModifier: upgradable.priceModifier,
    upgradeModifier: upgradable.upgradeModifier,
    actionButton: upgradable.actionButton
  }
}

