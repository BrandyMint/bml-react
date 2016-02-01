import React from 'react';

import Attribute from 'components/LBlockEditForm/Attribute';
import get from 'lodash/get';
import partial from 'lodash/partial';

const NodeAttributes = ({ attributes, onChange }) => (
  <div className="TabPage">
    <Attribute
      attribute="id"
      description="Аттрибут id у тега блока"
      placeholder="Введите идентификатор блока"
      title="Идентификатор блока (якорь)"
      value={get(attributes, 'id')}
      onChange={partial(onChange, 'id')}
    />
    <Attribute
      attribute="class"
      description="Аттрибут class у тега блока"
      placeholder="Введите название класса у блока"
      title="Класс блока"
      value={get(attributes, 'class')}
      onChange={partial(onChange, 'class')}
    />
  </div>
);

export default NodeAttributes;
