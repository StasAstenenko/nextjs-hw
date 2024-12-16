import CompanyRow from '@/app/components/company-row';
import CompanyTable from '@/app/components/company-table';
import { Status } from '@/app/components/status-label';

const Companies = () => {
  return (
    <>
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
