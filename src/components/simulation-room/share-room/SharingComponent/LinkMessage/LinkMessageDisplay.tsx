
interface LinkMessageProps {
    LinkMessage?:number
}

const LinkMessageDisplay: React.FC <LinkMessageProps> = ({
    LinkMessage
}) =>
{
    switch (LinkMessage)
    {
        case (0):
            {
                return (
                    <>
                    </>
                )
            }
        case (1):
            return (
                <>
                <h5>
                    Link Copied To Clipboard.
                </h5>
                </>
            )
        case (2):
            return (
                <>
                <h5>
                    No Link to Copy.
                </h5>
                </>
            )
        case (3):
            return (
                <>
                <h5>
                    QR Code Generated Successfully.
                </h5>
                </>
            )
    }
}

export default LinkMessageDisplay;