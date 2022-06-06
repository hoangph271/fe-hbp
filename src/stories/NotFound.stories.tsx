import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotFound } from '../routes/NotFound'

export default {
  title: 'ErrorPages/NotFoundPage',
  component: NotFound,
  argTypes: {
    startAt: { control: 'date' }
  }
} as ComponentMeta<typeof NotFound>

const Template: ComponentStory<typeof NotFound> = (args) => <NotFound {...args} />

export const Default = Template.bind({})
