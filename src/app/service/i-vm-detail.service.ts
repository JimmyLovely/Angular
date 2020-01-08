import { Observable } from 'rxjs';

// Model
import { IVmDetail } from '../model/vm-detail';

export abstract class IVmDetailService {
    abstract getAll(): Observable<IVmDetail[]>;
}
