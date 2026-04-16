# Vector2

## Propriedades

### X

eixo horizontal valor do tipo numero flutuante

### Y

eixo vertical valor do tipo numero flutiante

## Criando Vector2

### Nova Instancia

para criar um vetor basta tilizar a classe `Vector2`

```ts

const a = new Vector2(1, 3)

```

## Métodos

### sum( )

soma o `Vector2` atual com outros `Vector2`

#### Exemplos

```ts

const a = new Vector2(1, 2)
const b = new Vector2(3, 1)


const c = a.sum(b) // Vector2(4, 3)

```