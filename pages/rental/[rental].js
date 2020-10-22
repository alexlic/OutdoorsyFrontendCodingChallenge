import { useRouter } from 'next/router'

const Rental = () => {
  const router = useRouter()
  const { rental } = router.query
  console.log(router.query)

  return <p>Rental: {rental}</p>
}

export default Rental
