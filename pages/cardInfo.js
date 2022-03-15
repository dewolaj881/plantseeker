import {useRouter} from "next/router";
import {QueryClient, QueryClientProvider} from "react-query";
import CardInfo from "../components/CardInfo";
import Error from "../components/Error";

const queryClient = new QueryClient();

export default function Home() {
  const router = useRouter();
  if (!router.query.id) {
    return <Error/>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <CardInfo id={router.query.id}/>
    </QueryClientProvider>
  )
}
