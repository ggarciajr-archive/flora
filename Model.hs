
{-|
Module     :  Model
Description:  Exports all  model types of the project.

Each model defines the interface between yesod and the database.
-}
module Model
  ( module Model
  , module Model.FreeSession
  , module Model.Project
  , module Model.User
  ) where

import ClassyPrelude.Yesod
import Database.Persist.Quasi
import Model.FreeSession
import Model.Project
import Model.User

-- You can define all of your database entities in the entities file.
-- You can find more information on persistent and how to declare entities
-- at:
-- http://www.yesodweb.com/book/persistent/
share [mkPersist sqlSettings, mkMigrate "migrateAll"]
    $(persistFileWith lowerCaseSettings "config/models")
