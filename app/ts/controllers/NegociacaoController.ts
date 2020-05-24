import { Negociacao } from '../models/Negociacao';
import { Negociacoes } from '../models/Negociacoes';
import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoes');
    private _mensagemView = new MensagemView('#mensagem');

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._atualizaNegociacoes();
    }

    adiciona(evento: Event) {
        evento.preventDefault();
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._atualizaNegociacoes();
        this._mensagemView.update('Negociação adicionada com sucesso.');
    }

    private _atualizaNegociacoes() {
        this._negociacoesView.update(this._negociacoes);
    }

}
