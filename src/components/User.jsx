import { useState, useEffect } from 'react'
import SkeletonProfile from '../skeletons/SkeletonProfile'

const User = () => {
  const [profile, setProfile] = useState(null)

  const delayRequestForSkeleton = () => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await res.json()
      console.log(data)
      setProfile({ ...data })
    }, 5000)
  }

  useEffect(() => {
    delayRequestForSkeleton()
  }, [])
  return (
    <div className="user">
      <h2> User Details </h2>
      {profile && (
        <div className="profile">
          <h3> {profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}
      {!profile && <SkeletonProfile theme="light" />}
    </div>
  )
}

export default User
