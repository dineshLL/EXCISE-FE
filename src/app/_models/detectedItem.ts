import Amount from "./amount";

export default class DetectedItem {
    itemCode: String;
    subItemCode: String;
    amount: Amount = new Amount();
}