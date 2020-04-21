class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoes');
    private _mensagemView = new MensagemView('#mensagem');

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._atualizaNegociacoes();
    }

    adiciona(evento: Event) {
        evento.preventDefault();
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        this._negociacoes.adiciona(negociacao);
        this._atualizaNegociacoes();
        this._mensagemView.update('Negociação adicionada com sucesso.');
    }

    private _atualizaNegociacoes() {
        this._negociacoesView.update(this._negociacoes);
    }

}