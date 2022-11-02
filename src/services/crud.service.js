import { ref } from "firebase/database";
import db from "../firebase";

class DataService {
    getAll() {
        return ref(db, '/data');
    }
}

export default new DataService();