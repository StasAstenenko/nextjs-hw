import AddCompanyButton from '@/app/components/add-company-button';
import CompanyRow from '@/app/components/company-row';
import CompanyTable from '@/app/components/company-table';
import Header from '@/app/components/header';
import SearchInput from '@/app/components/search-input';
import { Status } from '@/app/components/status-label';
import Toolbar from '@/app/components/toolbar';

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
          company={'Costco'}
          country={'USA'}
          category={'Products'}
          promotion={true}
          joinedDate={'02-19-2023'}
        />
      </CompanyTable>
    </>
  );
};

export default Companies;
