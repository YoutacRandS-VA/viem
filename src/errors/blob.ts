import { versionedHashVersionKzg } from '../constants/kzg.js'
import type { Hash } from '../types/misc.js'

import { BaseError } from './base.js'

export type EmptyBlobLengthErrorType = EmptyBlobLengthError & {
  name: 'EmptyBlobLengthError'
}
export class EmptyBlobLengthError extends BaseError {
  override name = 'EmptyBlobLengthError'
  constructor() {
    super('Transaction must contain a blob.')
  }
}

export type InvalidVersionedHashSizeErrorType =
  InvalidVersionedHashSizeError & {
    name: 'InvalidVersionedHashSizeError'
  }
export class InvalidVersionedHashSizeError extends BaseError {
  override name = 'InvalidVersionedHashSizeError'
  constructor({
    hash,
    size,
  }: {
    hash: Hash
    size: number
  }) {
    super(`Versioned hash "${hash}" size is invalid.`, {
      metaMessages: ['Expected: 32', `Received: ${size}`],
    })
  }
}

export type InvalidVersionedHashVersionErrorType =
  InvalidVersionedHashVersionError & {
    name: 'InvalidVersionedHashVersionError'
  }
export class InvalidVersionedHashVersionError extends BaseError {
  override name = 'InvalidVersionedHashVersionError'
  constructor({
    hash,
    version,
  }: {
    hash: Hash
    version: number
  }) {
    super(`Versioned hash "${hash}" version is invalid.`, {
      metaMessages: [
        `Expected: ${versionedHashVersionKzg}`,
        `Received: ${version}`,
      ],
    })
  }
}
