export default function Home() {
  const zoom_auth_url = new URL("https://zoom.us/oauth/authorize");
  zoom_auth_url.searchParams.set("response_type", "code");
  zoom_auth_url.searchParams.set(
    "client_id",
    process.env.NEXT_PUBLIC_CLIENT_ID
  );
  zoom_auth_url.searchParams.set(
    "redirect_uri",
    "https://" + process.env.VERCEL_URL + "/redirect"
  );
  return <a href={zoom_auth_url}>zoom 連携</a>;
}
