import { Button } from './components/button/button';
import { ElementPicker } from './components/editor/element-picker/element-picker';
import { IconSVG } from './components/icon/icon';
import { Modal } from './components/modal/modal';

export function App() {
  return (
    <div>
      <Modal trigger={<Button>Trigger</Button>} title="Test">
        <ElementPicker
          defaultValue={{ id: 'horizontal', name: 'Horizontal', iconSvg: IconSVG.inline }}
          elements={[
            { id: 'horizontal', name: 'Horizontal', iconSvg: IconSVG.inline },
            { id: 'vertical', name: 'Vertical', iconSvg: IconSVG.stack },
            { id: 'stacked', name: 'Stack', iconSvg: IconSVG['scale-up'] },
          ]}
        />
      </Modal>
    </div>
  );
}
