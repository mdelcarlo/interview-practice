import Link from 'next/link'

const paths = [
  'file-tree-viewer',
  'hooks',
  'market',
  'signup',
  'sudoku',
  'tetris',
  'questionnaire',
  'tic-tac-toe'
]



export default function Home() {
  return (
    <div style={{ padding: '20px', margin: '20px' }}>
      <h1> React Challenges </h1>
      <ol>
      { paths.map((path,i)=> (
        <li key={i} style={{ margin: '10px' }}>
          <Link href={`/challenges/${path}`}>{path}</Link>
          <h4>Solution: <Link href={`/challenges/${path}_solution`}>{path} solution</Link></h4>
        </li>
      ))}
      </ol>
    </div>
  )
}
