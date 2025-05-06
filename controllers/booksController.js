let books = [];
let nextId = 1;

export function resetBooks() {
  books = [];
  nextId = 1;
}

export function getAll(req, res) {
  res.json(books);
}

export function create(req, res) {
  const { title, author } = req.body;
  if( title || author ) {
    const book = { id: nextId++, title, author };
    books.push(book);
    res.status(201).json(book);
  } else {
    res.status(400).json({})
  }

}

export function update(req, res) {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ error: 'Livro não encontrado' });

  books[index] = { id, ...req.body };
  res.json(books[index]);
}

export function remove(req, res) {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ error: 'Livro não encontrado' });

  books.splice(index, 1);
  res.status(204).send();
}
