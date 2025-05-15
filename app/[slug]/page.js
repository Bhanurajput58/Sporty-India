
export default function Page({ pageExists, slug }) {
  if (!pageExists) {
    return <div>This Page does not Exists</div>;
  }
}
