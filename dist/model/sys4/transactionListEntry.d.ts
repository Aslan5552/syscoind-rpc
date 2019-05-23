import { SysTx } from "./SysTx";
export interface TransactionListEntry {
    category?: string;
    amount?: number;
    vout?: number;
    fee?: number;
    confirmations?: number;
    blockhash?: string;
    blockindex?: number;
    blocktime?: number;
    txid?: string;
    walletconflicts?: Array<any>;
    time?: number;
    timereceived?: number;
    "bip125-replaceable"?: string;
    abandoned?: boolean;
    systx?: SysTx;
}
