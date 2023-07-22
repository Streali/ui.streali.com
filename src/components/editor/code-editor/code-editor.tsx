import { Icon } from '../../icon/icon';
import { Code } from '../code/code';
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';

export function CodeEditor() {
  return (
    <PanelGroup direction="horizontal" className="bg-grey-900 border-t border-grey-400 flex w-full">
      <Panel className="p-4 border-r border-grey-400 relative" collapsible order={1}>
        <p className="mb-3">HTML</p>
        <Code language="html" className="h-64" />
      </Panel>
      <PanelResizeHandle className="relative z-10">
        <div className="w-8 h-8 rounded-full border border-grey-400 absolute top-1/2 -right-4 bg-grey-900 flex items-center justify-center">
          <Icon name="expand-left-right-line" />
        </div>
      </PanelResizeHandle>
      <Panel className="p-4 border-r border-grey-400 relative" collapsible order={1}>
        <p className="mb-3">CSS</p>
        <Code language="css" className="h-64" />
      </Panel>
      <PanelResizeHandle className="relative z-10">
        <div className="w-8 h-8 rounded-full border border-grey-400 absolute top-1/2 -right-4 bg-grey-900 flex items-center justify-center">
          <Icon name="expand-left-right-line" />
        </div>
      </PanelResizeHandle>
      <Panel className="p-4 relative" collapsible order={1}>
        <p className="mb-3">JS</p>
        <Code language="javascript" className="h-64" />
      </Panel>
    </PanelGroup>
  );
}
