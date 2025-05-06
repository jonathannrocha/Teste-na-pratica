import { test } from 'node:test';
import assert from 'node:assert';
import app from '../app.js';
import http from 'http';

const controller = await import('../controllers/booksController.js');

function makeRequest({ method, path, data }) {
  return new Promise((resolve, reject) => {
    const body = data ? JSON.stringify(data) : '';
    const req = http.request(
      {
        hostname: 'localhost',
        port: 3000,
        path,
        method,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      res => {
        let responseBody = '';
        res.on('data', chunk => (responseBody += chunk));
        res.on('end', () => {
          resolve({
            status: res.statusCode,
            body: responseBody ? JSON.parse(responseBody) : null,
          });
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

let server;

test.describe( "Teste inicias", ()=> {
  test('SETUP - iniciar servidor', async (t) => {
    server = app.listen(3000);
    controller.resetBooks(); 
  });
  
  test('Criar livro', async () => {
    const res = await makeRequest({
      method: 'POST',
      path: '/',
      data: { title: '1984', author: 'George Orwell' },
    });
  
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.body.title, '1984');
  });
  
  test('Editar livro', async () => {
    const res1 = await makeRequest({
      method: 'POST',
      path: '/',
      data: { title: 'Original', author: 'Autor' },
    });
  
    const bookId = res1.body.id;
  
    const res2 = await makeRequest({
      method: 'PUT',
      path: `/${bookId}`,
      data: { title: 'Atualizado', author: 'Autor X' },
    });
  
    assert.strictEqual(res2.status, 200);
    assert.strictEqual(res2.body.title, 'Atualizado');
  });
  
  test('Excluir livro', async () => {
    const res1 = await makeRequest({
      method: 'POST',
      path: '/',
      data: { title: 'Livro para excluir', author: 'A' },
    });
  
    const res2 = await makeRequest({
      method: 'DELETE',
      path: `/${res1.body.id}`,
    });
  
    assert.strictEqual(res2.status, 204);
  });
  
  test('TEARDOWN - encerrar servidor', async () => {
    server.close();
  });
})

test.describe( "Teste erros de chamada", ()=> {
  test('SETUP - iniciar servidor', async (t) => {
    server = app.listen(3000);
    controller.resetBooks(); 
  });
  
  test('Não deve criar livro',   async () => {
    const res = await makeRequest({
      method: 'POST',
      path: '/',
      data: {  },
    });
  
    assert.strictEqual(res.status, 400);
  });
  
  test('TEARDOWN - encerrar servidor', async () => {
    server.close();
  });
})


