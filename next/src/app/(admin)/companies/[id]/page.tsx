import Header from "@/app/components/header";

export interface CompaniesProps {
  params: { id: string[] };
}

const Companies = ({ params }: CompaniesProps) => {
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
    </>
  );
};

export default Companies;
