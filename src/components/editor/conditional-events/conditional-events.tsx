'use client';

import { useState } from 'react';
import { Icon, IconSVG } from '../../icon/icon';
import { Select } from '../../forms/select/select';
import { Input } from '../../forms/input/input';
import { Button } from '../../button/button';

export type Provider = {
  id: string;
  name: string;
  icon?: string;
  iconSVG?: IconSVG;
  iconClassName?: string;
  color: string;
  textBlack?: boolean;
};

export type EventList = {
  providerId: string;
  events: { label: string; value: string; customElement?: boolean; customElementLabel?: string }[];
};

interface ConditionalEventsProps {
  providers: Provider[];
  events: EventList[];
  onEventSelected: (providerId: string, eventId: string, customElement?: string | null) => void;
}

export function ConditionalEvents(props: ConditionalEventsProps) {
  const { providers, events, onEventSelected } = props;

  const [currentProvider, setCurrentProvider] = useState<null | string>(null);
  const [currentEvent, setCurrentEvent] = useState<null | string>(null);
  const [currentCustomElement, setCurrentCustomElement] = useState<null | string>(null);

  return (
    <div className="p-3 border border-grey-400 bg-grey-600 rounded-md">
      {!currentProvider && (
        <div>
          <div className="bg-primary-500 p-3 rounded mb-3">
            <h4 className="text-xl font-medium leading-none mb-1">Provider</h4>
            <p className="leading-none">Choose a provider from which we retrieve events</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {providers.map((provider) => (
              <button
                key={provider.id}
                onClick={() => setCurrentProvider(provider.id)}
                className={`flex-1 h-10 w-full rounded flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-200 ${
                  provider.textBlack ? 'text-black' : 'text-white'
                }`}
                style={{ backgroundColor: provider.color }}>
                {provider.icon && <Icon name={provider.icon} />}
                {provider.iconSVG && (
                  <Icon
                    svg={provider.iconSVG}
                    width={14}
                    height={14}
                    className={`${provider.textBlack ? 'fill-black' : 'fill-white'}`}
                  />
                )}
                {provider.name}
              </button>
            ))}
          </div>
        </div>
      )}
      {currentProvider && (
        <div>
          <div
            className="bg-grey-400 p-3 rounded mb-3 cursor-pointer hover:bg-grey-300 transition-colors duration-200"
            onClick={() => {
              setCurrentEvent(null);
              setCurrentProvider(null);
              setCurrentCustomElement(null);
            }}>
            <p className="leading-none mb-1">Provider</p>
            <h4 className="text-xl font-medium leading-none flex items-center gap-1.5">
              {providers.find((p) => p.id === currentProvider)?.icon && (
                <Icon name={providers.find((p) => p.id === currentProvider)?.icon} />
              )}
              {providers.find((p) => p.id === currentProvider)?.iconSVG && (
                <Icon
                  svg={providers.find((p) => p.id === currentProvider)?.iconSVG}
                  width={16}
                  height={16}
                  className={`${
                    providers.find((p) => p.id === currentProvider)?.textBlack
                      ? 'fill-black'
                      : 'fill-white'
                  }`}
                />
              )}
              {providers.find((p) => p.id === currentProvider)?.name}
            </h4>
          </div>
          <div className="bg-primary-500 p-3 rounded mb-3">
            <h4 className="text-xl font-medium leading-none mb-1">Event</h4>
            <p className="leading-none">Choose an event you want to react to</p>
          </div>
          <Select
            options={events.find((e) => e.providerId === currentProvider)?.events || []}
            label="Choose an event"
            onChange={(newValue) => {
              const value = newValue as { label: string; value: string };
              setCurrentEvent(value.value);
              setCurrentCustomElement(null);
            }}
          />
          {events
            .find((e) => e.providerId === currentProvider)
            ?.events.find((e) => e.value === currentEvent)?.customElement && (
            <Input
              labelClassName="mt-3"
              defaultValue={currentCustomElement ? currentCustomElement : undefined}
              onChange={(e) => setCurrentCustomElement(e.target.value)}
              label={
                events
                  .find((e) => e.providerId === currentProvider)
                  ?.events.find((e) => e.value === currentEvent)?.customElementLabel
              }
            />
          )}
        </div>
      )}
      {currentProvider && currentEvent && (
        <Button
          className="mt-3 w-full"
          color="secondary"
          onClick={() => onEventSelected(currentProvider, currentEvent, currentCustomElement)}>
          Choose this event
        </Button>
      )}
    </div>
  );
}
