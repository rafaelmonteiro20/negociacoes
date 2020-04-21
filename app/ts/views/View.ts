class View<T> {

    protected _elemento: Element

    constructor(seletor: string) { 
        this._elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: T): string {
        throw new Error('O método template deve ser implementado.');
    }

}
