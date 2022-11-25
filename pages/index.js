export default function Home() {
  return null
}

export function getStaticProps() {
  console.log(require.context(".").keys())
  const context = require.context(".")
  console.log(keys)
  const keys = context.keys()
  console.log(keys)
  return { props: {} }
}
