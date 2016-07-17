{-|
Module     :  Model.User
Description:  Defines the User model
-}
module Model.User where

import ClassyPrelude
import Database.Persist.TH

-- | Defines the User entity.
share [mkPersist sqlSettings] [persistLowerCase|
User sql=users
  createdAt             UTCTime             default=now()
  lastAccess            UTCTime             default=now()
  updatedAt             UTCTime             default=now()
  deriving Show Eq Typeable
|]
