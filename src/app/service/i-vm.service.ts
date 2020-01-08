import { Observable } from 'rxjs';

// Model
import { Vm } from '../model/vm';

export abstract class IVmService {
    abstract getAll(): Observable<Vm[]>;
}
