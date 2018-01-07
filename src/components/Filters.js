import React from "react";
import "../less/filter-list.less";

export default function Filters({filters, filterClick}) {
    const filtersEls = filters.map((filter, index) => {
        const filterClass = "filter" + (filter.active ? " active" : "");
        return <span className={filterClass}
                     key={index}
                     onClick={filterClick.bind(null, filter.name)}>{filter.name.toLowerCase()}</span>
    });

    return (
        <div className="filter-list">
            {filtersEls}
        </div>
    );
}