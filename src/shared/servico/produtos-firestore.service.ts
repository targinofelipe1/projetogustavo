import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosFirestoreService {
  colecaoProdutos: AngularFirestoreCollection<Produto>; 
  NOME_COLECAO = 'produtos'; 

  constructor(private afs: AngularFirestore) { 
    this.colecaoProdutos = this.afs.collection<Produto>(this.NOME_COLECAO); 
  }

  listar(): Observable<Produto[]> { 
    return this.colecaoProdutos.valueChanges({ idField: 'id' });
  }
}
