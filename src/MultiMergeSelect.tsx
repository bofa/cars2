import { Checkbox, Divider, HTMLSelect, Menu, MenuDivider, MenuItem } from "@blueprintjs/core"

export type MergeSelect = { name: string|null, series: string[] }

export function MultiMergeSelect(props: {
  items: {
    id: string
    name: string
  }[]
  selected: MergeSelect[]
  setSelected: (selected: MergeSelect[]) => void
}) {

  // const SelectGroup = () => <HTMLSelect value={undefined} minimal options={['', ...props.selected.map(g => g.name ?? g.series.join())]} />

  return (
    <div style={{ height: '80vh', width: 300, overflowY: 'scroll' }}>
      <Menu>
        {props.selected.map((g, i) => <>
          {g.series.length > 1 &&
            <MenuDivider
              title={g.name ?? g.series.join()}
            />
          }
          {g.series.map(v =>
            <MenuItem
              text={v}
              onClick={() => props.setSelected(props.selected.filter((_, i2) => i2 !== i))}
            />
          )}
          </>
        )}
      </Menu>
      <Divider/>
      <Menu>
        {props.items.map(item =>
          <MenuItem
            // labelElement={<SelectGroup/>}
            key={item.id}
            text={item.name}
            onClick={(e: any) => {
              if (e.target.localName !== 'select') {
                props.setSelected(props.selected.concat({ name: null, series: [item.id] }))
              }
            }}
          />
        )}
      </Menu>
    </div>
  )
}

function SelectElement(props: {

}) {
  return (
    <HTMLSelect minimal options={['1', '2', '3']} />
  )
}
