import DetectedItem from './detectedItem';
import Accused from './accused';

export default class Cr {

    id: String;
    crNumber:String;
    detectedDate: String;
    detectionOfficer: String;
    informant: String;
    detectedItem: DetectedItem;
    accused: Accused;
    state: String;

}
