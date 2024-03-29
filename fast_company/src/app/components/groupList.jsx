import React from "react";
import PropTypes from "prop-types";
const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemsSelect,
  selectedItem,
}) => {
  if (!Array.isArray(items)) {
    return (
      <>
        <ul className="list-group">
          {Object.keys(items).map((item) => (
            <li
              role="button"
              className={
                "list-group-item" +
                (items[item] === selectedItem ? " active" : "")
              }
              key={items[item][valueProperty]}
              onClick={() => onItemsSelect(items[item])}
            >
              {items[item][contentProperty]}
            </li>
          ))}
        </ul>
      </>
    );
  }
  return (
    <>
      <ul className="list-group">
        {Object.keys(items).map((item) => (
          <li
            role="button"
            className={
              "list-group-item" +
              (items[item] === selectedItem ? " active" : "")
            }
            key={items[item][valueProperty]}
            onClick={() => onItemsSelect(items[item])}
          >
            {items[item][contentProperty]}
          </li>
        ))}
      </ul>
    </>
  );
};
GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name",
};
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemsSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object.isRequired,
};

export default GroupList;
