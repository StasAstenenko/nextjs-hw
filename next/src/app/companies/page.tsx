import AddCompanyButton from "../components/add-company-button";
import CompanyRow from "../components/company-row";
import CompanyTable from "../components/company-table";
import Header from "../components/header";
import SearchInput from "../components/search-input";
import { Status } from "../components/status-label";
import Toolbar from "../components/toolbar";

const Companies = () => {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          status={Status.Pending}
          company={"Costco"}
          country={"USA"}
          category={"Products"}
          promotion={true}
          joinedDate={"02-19-2023"}
        />
      </CompanyTable>
    </>
  );
};

export default Companies;
