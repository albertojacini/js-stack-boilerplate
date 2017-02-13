import React from 'react'
import DocumentTitle from 'react-document-title'

import Message from '../../container/message'
import BarkAsyncButton from '../../container/bark-async-button'
import { fullTitle } from '../../util'

const title = 'Dog Async'

const DogAsyncPage = () =>
  <div>
    <DocumentTitle title={fullTitle(title)}>
      <h1>{title}</h1>
    </DocumentTitle>
    <Message />
    <BarkAsyncButton />
  </div>

export default DogAsyncPage
