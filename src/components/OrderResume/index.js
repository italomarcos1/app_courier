import React, { useMemo, useState } from 'react';
import { Text } from 'react-native';

import Arrow from '~/assets/dropdown.svg';

import {
  NifContainer,
  NifButton,
  NifText,
  OptionalBadge,
  OptionalText,
  NifInput,
  ResumeValueContainer,
  ResumeValue,
  PickYourTableContainer,
  PickYourTableSelect,
  PickYourTableArrow,
  PickYourTable,
  PickYourTableOption,
  PickYourTableOptionText
} from './styles';

export default function OrderResume() {
  const [selectVisibility, setSelectVisibility] = useState(false)

  const tableOptions = useMemo(() => [
    {
      id: 1, value: 1,
      id: 2, value: 2,
      id: 3, value: 3,
      id: 4, value: 4,
      id: 5, value: 5,
      id: 6, value: 6,
      id: 7, value: 7,
    }
  ],[]);

  return (
    <>
     <NifContainer>
          <NifButton>
            <NifText>NIF</NifText>
          </NifButton>
          <OptionalBadge>
            <OptionalText>Opcional</OptionalText>
          </OptionalBadge>
          <NifInput />
        </NifContainer>
        <ResumeValueContainer>
          <ResumeValue>Subtotal</ResumeValue>
          <ResumeValue>24,40 &euro;</ResumeValue>
        </ResumeValueContainer>
        <ResumeValueContainer>
          <ResumeValue>Crédito Anterior</ResumeValue>
          <ResumeValue>0,00 &euro;</ResumeValue>
        </ResumeValueContainer>
        <ResumeValueContainer>
          <ResumeValue>Crédito após 24h</ResumeValue>
          <ResumeValue>1,22 &euro;</ResumeValue>
        </ResumeValueContainer>
        <ResumeValueContainer>
          <ResumeValue>Total</ResumeValue>
          <Text style={{ color: '#0B0B0B', fontSize: 20 }}>24,40 &euro;</Text>
        </ResumeValueContainer>
        <PickYourTableContainer>
          <ResumeValue>Selecione a sua mesa</ResumeValue>
          <PickYourTableSelect
            onPress={() => {}}
          >
            <Text style={{ color: '#333', fontSize: 14 }}>
              Selecione
            </Text>
            <PickYourTableArrow>
              <Arrow width={11} height={8} style={{ width: 11, height: 8 }} />
            </PickYourTableArrow>
          </PickYourTableSelect>
        </PickYourTableContainer>
    </>
  );
}
