
import Header from '@/components/ui/Header';
import { Fragment } from 'react';
import KanbanBoard from '../KanbanBoard'; 

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="container mx-auto py-6">
        <KanbanBoard />
      </main>
    </Fragment>
  );
}
