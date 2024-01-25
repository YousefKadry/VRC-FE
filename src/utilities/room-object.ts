import { TVec3 } from '../models/room';

class RoomObjectUtil {
    static convertRotationFromDegreeToEuler(rotationInDegree: TVec3): TVec3 {
        return rotationInDegree.map((degree: number) => (degree * Math.PI) / 180) as TVec3;
    }

    static convertRotationFromEulerToDegree(rotationInEuler: TVec3): TVec3 {
        return rotationInEuler.map((degree: number) => (degree * 180) / Math.PI) as TVec3;
    }
}

export default RoomObjectUtil;
