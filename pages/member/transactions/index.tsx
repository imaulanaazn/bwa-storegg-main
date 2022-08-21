import Sidebar from '../../../components/organism/Sidebar';
import TransactionContent from '../../../components/organism/TransactionContent';

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}
