import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NotFoundPage } from '../components/NotFoundPage'

export default {
  title: 'ErrorPages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    startAt: { control: 'date' }
  }
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const Default = Template.bind({})
