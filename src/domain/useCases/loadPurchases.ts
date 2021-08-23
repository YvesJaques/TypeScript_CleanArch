import { PurchaseModel } from "@/domain/models"

export interface LoadPurchases {
    laodAll: () => Promise<Array<LoadPurchases.Result>>
}

export namespace LoadPurchases {    
    export type Result = PurchaseModel
}