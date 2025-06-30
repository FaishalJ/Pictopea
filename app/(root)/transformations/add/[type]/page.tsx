interface Props {
  params: Promise<{ id: string }>
}
export default async function AddTransformationTypePage({params}: Props) {
  const { id } = await params;

  return <h1>AddTransformationsType Page</h1>;
}