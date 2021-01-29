# lsFusionSearch

# Search

Each element in the system contains certain information that allows it [to be uniquely identified](Element_identification.md) among other elements of the system. However, providing all the information about the element in each place it is used is rather cumbersome; so the platform has a special *search* algorithm, which allows you to find the desired element with only part of the information about it (for example, only a short [name](Naming.md) and the [module](Modules.md) which uses the item you are searching for).

In general, a search algorithm consists of one or more *search steps. *The steps are executed one after another so that if the required element is not found in the first step, the second step is executed, then the next and so on until either the required element is found or the steps are completed (in the latter case, the platform will throw an error that the element was not found).

Each search step, in turn, consists of several substeps:

-   *Step conditions* - a set of conditions, each of which must be met in order for the step to make sense at all. This check is done before any elements of the system are examined, and depends entirely on the context of the call.
-   *Selection conditions* - a set of conditions, each of which must be met for any element that is potentially the required element. In this step, the elements are independent of each other, and the result of this step is a selected *set of candidates, *to be the required element.
-   *Selection operations* - a list of operations each of which filters a set of candidates, depending on which of the candidates in this set is potentially "better" (that is, with a higher probability) suited for the role of the required element.

If, after performing the last selection operation, there remains:

-   exactly one element - it is considered to be the required element. 
-   more than one element - the platform will throw an error that it is not possible to unambiguously determine the required element
-   zero elements - the platform will either go to the next search step (if one exists) or it will throw an error that the element was not found.

Below are the steps, conditions and operations of the search algorithm, depending on the type of the required element:



**  
**
