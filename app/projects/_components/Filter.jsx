import { useRef, useState } from 'react';
import { TbBrandJavascript, TbBrandNextjs } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { FilterButton } from '@/projects/_components/FilterButton';

export function Filter({ onClick = (f) => f }) {
  const animRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState(undefined);

  const handleFilterClick = (filter) => {
    onClick(filter);
    setActiveFilter(filter);
  };

  return (
    <div
      ref={animRef}
      className="flex items-start flex-col sm:flex-row sm:items-center gap-4 my-10"
    >
      <h3
        aria-label="Filter projects"
        tabIndex="0"
        className="font-bold text-xl"
      >
        Filter by:
      </h3>
      <div className="flex items-center gap-4">
        <FilterButton
          onClick={() => handleFilterClick(undefined)}
          label="All"
          active={activeFilter === undefined}
        >
          All
        </FilterButton>
        <FilterButton
          onClick={() => handleFilterClick('React')}
          label="React"
          active={activeFilter === 'React'}
        >
          <FaReact size="20" />
        </FilterButton>
        <FilterButton
          onClick={() => handleFilterClick('Next')}
          label="Next"
          active={activeFilter === 'Next'}
        >
          <TbBrandNextjs size="20" />
        </FilterButton>
        <FilterButton
          onClick={() => handleFilterClick('Javascript')}
          label="Javascript"
          active={activeFilter === 'Javascript'}
        >
          <TbBrandJavascript size="20" />
        </FilterButton>
      </div>
    </div>
  );
}
