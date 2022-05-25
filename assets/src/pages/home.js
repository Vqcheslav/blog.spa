import {h} from 'preact';
import {Link} from 'preact-router';

export default function Home({posts}) {
    if (!posts) {
        return <div className="p-3 text-center">No posts yet</div>;
    }

    return (
        <div className="p-3">
            {posts.map((post)=> (
                <div className="card border shadow-sm lift mb-3">
                    <div className="card-body">
                        <div className="card-title">
                            <h4 className="font-weight-light">
                                {post.title} {post.content}
                            </h4>
                        </div>

                        <Link className="btn btn-sm btn-primary stretched-link" href={'/post/'+post.id}>
                            View
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}