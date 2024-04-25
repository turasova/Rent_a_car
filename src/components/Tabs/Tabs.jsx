import css from './Tabs.module.css';

export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className={css.tabs_container}>
      <button
        onClick={() => setActiveTab('features')}
        className={activeTab === 'features' ? 'active' : ''}
      >
        Features
      </button>
      <button
        onClick={() => setActiveTab('reviews')}
        className={activeTab === 'reviews' ? 'active' : ''}
      >
        Reviews
      </button>
    </div>
  );
};
