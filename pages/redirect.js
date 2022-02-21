import { useRouter } from "next/router";

export default function OAuthRedirect() {
  const router = useRouter();
  const query = router.query;
  console.log(query);
  return <div>OAuthからリダイレクトされました。</div>;
}
