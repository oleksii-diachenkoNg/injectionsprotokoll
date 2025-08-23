import { Injectable, signal } from "@angular/core";
import { type Injektion } from "./injektion.model";

@Injectable({
    providedIn: 'root',
})
export class injektionenService {
    private injektionen = signal<Injektion[]>([]);
    _injektionen = this.injektionen.asReadonly();
    constructor() { 
        const storedData = localStorage.getItem('injektionen');

        if (storedData) {
            this.injektionen.set(JSON.parse(storedData));
        }
    }

    addInjection(injection: Injektion) {
        this.injektionen.update(current => {
            const updated = [...current, injection];
            localStorage.setItem('injektionen', JSON.stringify(updated));
            return updated;
        });
    }

    removeInjection(id: string) { 
        this.injektionen.update(current => {
            const updated = current.filter(inj => inj.id !== id);
            localStorage.setItem('injektionen', JSON.stringify(updated));
            return updated;
        })
    }

    updateInjection(injektion: Injektion) { 
        this.injektionen.update(curr => {
            const updated = curr.map(inj => 
                inj.id === injektion.id ? injektion : inj
            );
            localStorage.setItem('injektionen', JSON.stringify(updated));
            return updated;
        })
        console.log(this._injektionen());
    }
}
